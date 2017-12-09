'use strict'

const path = require('path')
const fs = require('fs')
const table = require('markdown-table')

const allCriteria = require(path.join(__dirname, '../criteria.json'))
const candidates = require(path.join(__dirname, '../candidates.json'))

const candidatesMap = buildCandidatesMap()
const implementations = buildImplementationsMap()

// Generate root readme
rootReadme()

// Generate candidate readmes
for (const candidate of candidates)
    candidateReadme(candidate, allCriteria)

// Generate criteria readmes
for (const criteria in allCriteria)
    criteriaReadme(criteria, allCriteria[criteria])

function rootReadme() {
    console.log('Generating Root Readme')
    const filePath = path.join(__dirname, `../readme.md`)

    let candidatesMd = '';
    for (const candidate of candidates) {
        candidatesMd += `### [${candidate.name}](/${candidate.slug}) \r\n`
        candidatesMd += `*${candidate.tagline}* ([more](/${candidate.slug})) \r\n\r\n`
    }

    let candidateSlugs = candidates.map(c => c.slug)
    let headerRow = candidates.reduce((v, c) => { v.push(c.name); return v }, ['Criteria'])
    let criteriaTable = [headerRow]

    for (const criteria in allCriteria) {
        let set = implementations.get(criteria)
        let value = allCriteria[criteria]
        let row = [`[${value.display}](/criteria/${criteria}.md)`]

        for (const slug of candidateSlugs) {
            const hasImplementation = set.has(slug);
            if (!hasImplementation) {
                row.push('(todo)')
            } else {
                row.push(`[view](/${slug}/${criteria})`)
            }
        }

        criteriaTable.push(row)
    }

    let criteriaTableMd = table(criteriaTable)

    let readme = fs.readFileSync(path.join(__dirname, 'templates/root-readme-template.md'), 'utf8')
    readme = update(readme, {
        CANDIDATES: candidatesMd,
        CRITERIA_TABLE: criteriaTableMd
    })

    fs.writeFileSync(filePath, readme)
}

function candidateReadme(candidate, criteria) {
    console.log(`Generating Candidate: ${candidate.slug}`)

    const dirPath = path.join(__dirname, `../${candidate.slug}`)
    const filePath = path.join(__dirname, `../${candidate.slug}/readme.md`)

    ensureDir(dirPath)

    let criteriaTable = [['Criteria', 'Details']]
    for (const [key, value] of implementations) {
        if (value.has(candidate.slug)) {
            criteriaTable.push([ `[${allCriteria[key].display}](/criteria/${key}.md)` , `[view](/${candidate.slug}/${key})`])
        }
    }

    let readme = fs.readFileSync(path.join(__dirname, 'templates/candidate-template.md'), 'utf8')
    readme = update(readme, {
        NAME: candidate.name,
        WEBSITE: candidate.homepage,
        BADGE_STARS: candidate.badges.stars,
        BADGE_FORKS: candidate.badges.forks,
        BADGE_WATCHERS: candidate.badges.watchers,
        BADGE_LICENSE: candidate.badges.license,
        BADGE_AWESOME: candidate.badges.awesome,
        BADGE_VERSION: candidate.badges.version,
        BADGE_BUILD: candidate.badges.build,
        BADGE_COVERAGE: candidate.badges.coverage,
        BADGE_BROWSER_MATRIX: candidate.badges.browserMatrix,
        EVALUATION_CRITERIA: table(criteriaTable),
        DESCRIPTION: candidate.description,
        HISTORY: candidate.history
    });

    fs.writeFileSync(filePath, readme)
}

function criteriaReadme(key, value) {
    console.log(`Generating Criteria: ${key}`)

    const dirPath = path.join(__dirname, '../criteria')
    const filePath = path.join(__dirname, `../criteria/${key}.md`)
    ensureDir(dirPath)

    let criteriaConsiderations = value.considerations || []
    let considerationMd = '';

    for (const consideration of criteriaConsiderations) {
        considerationMd += `- ${consideration} \r\n`
    }

    let candidateTable = [['Candidate', 'Details']]
    const criteriaImplementations = implementations.get(key)
    for (const candidate of criteriaImplementations) {
        const value = candidatesMap.get(candidate);
        candidateTable.push([`[${value.name}](/${value.slug})`, `[view](/${value.slug}/${key})` ])
    }

    let readme = fs.readFileSync(path.join(__dirname, 'templates/criteria-template.md'), 'utf8')
    readme = update(readme, {
        DISPLAY: value.display,
        DESCRIPTION: value.description || '``` // TODO ```',
        CONSIDERATIONS: considerationMd || '``` // TODO ```',
        CANDIDATES: table(candidateTable)
    })

    fs.writeFileSync(filePath, readme)
}

function update(src, model) {
    for (const key in model) {
        src = src.replace(`%${key}%`, model[key] || '')
    }

    return src
}

function ensureDir(dirPath) {
    try {
        fs.statSync(dirPath)
    } catch (err) {
        fs.mkdirSync(dirPath)
    }
}

function buildImplementationsMap() {
    for (const candidate of candidates) {
        ensureDir(path.join(__dirname, `../${candidate.slug}`))
    }

    const implementations = new Map()
    for (const criteria in allCriteria) {
        const implementedCandidates = new Set()

        for (const candidate of candidates) {
            let implemented = true;
            try {
                fs.statSync(path.join(__dirname, `../${candidate.slug}/${criteria}/readme.md`))
            } catch (err) {
                implemented = false;
            }

            if (implemented) {
                implementedCandidates.add(candidate.slug)
            }
        }

        implementations.set(criteria, implementedCandidates)
    }

    return implementations
}

function buildCandidatesMap() {
    const map = new Map();

    for (const candidate of candidates)
        map.set(candidate.slug, candidate)

    return map
}
