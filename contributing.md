# How to contribute

Contributions to *ui-framework-comparison* are highly encouraged! To maintain a truly objective stance on the candidate frameworks and libraries being evaluated, it is critical to have the voices of many contributing to the research and demos within. 

## Getting Started

*ui-framework-comparison* attempts to automate most of the documentation, linking, table generation, etc. throughout the repository allowing contributors to focus only on adding new research and demos. The tree view below outlines the structure of the project:

```
/ui-framework-comparison/
|-- readme.md
|-- criteria.json
|-- candidates.json
|-- angular                  (candidate)
|   |-- readme.md
|   |-- i18n                 (criteria)
|   |   |-- readme.md
|   |   |-- demo1.js
|   |   |-- demo2.js
|   |-- components           (criteria)
|   |   |-- readme.md
|   |   |-- demo1.js
`   `   `-- demo2.js
```

To implement a new candidate or criteria, simply follow the defined project structure for any new additions. After making changes or additions, run `npm run generate` to auto-detect your changes and update documentation with new links and table entries. It is important that the project structure remains consistent for this to work.

### What should I work on?

Browse issues tagged "[help wanted](https://github.com/brandon93s/ui-framework-comparison/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)" to identify candidates and/or criteria that have incomplete research and demos.

### Dev environment setup

Once you've cloned the repository, run `npm install` to install all necessary dependencies. 

### Adding a new candidate framework or library

All candidate frameworks and libraries are defined in [candidates.json](candidates.json). To add a new candidate, simply add a new entry to the json collection following the metadata fields provided for existing frameworks/libraries. Run `npm run generate` to automatically update all documentation, tables, links and scaffold the necessary folders and readme files for the new candidate.

### Adding a new evaluation criteria

All evaluation criteria are defined in [criteria.json](criteria.json). To add a new criteria, simply add a new entry to the json collection following the metadata fields provided for existing criteria. Run `npm run generate` to automatically update all documentation, tables, links and scaffold the necessary readme files for the new criteria.

## Submitting Changes

- Push your changes to a topic branch in your fork of the repository.
- Submit a pull request to the core repository.
- Community discussion and review of the submitted changes.
- Merge!