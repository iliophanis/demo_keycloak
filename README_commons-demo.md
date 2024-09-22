# Compliance Common UI

## Add feature / Bug fix process

- Create a new branch including jira number on branch name (e.g., `ESRA-1234`) using as a base the `develop` branch
- In the `changeLogs` folder, create a Markdown file named with the Jira number (e.g., `ESRA-7722_ChangeLog.md`). 
  - Inside the file, add the appropriate category: Updates, Fixes, or Feature Enhancements.
- Create an merge request using as source the feature/bug branch and as target the `develop` branch

## Release process

- Create a new branch including release version in the branch name (release/1.2.3) using as a base the develop branch
- In pom.xml file set compliance-parent version to the latest released version (https://gitlab.swpd/eskort/assets/components/compliance-parent/-/blob/master/pom.xml)
- In pom.xml file update revision to be the new release version (e.g 1.2.3)
- Run sync.pom.version.js script using a terminal in the root project folder (command: node sync.pom.version.js)
- Run npm install to sync the package-lock.json with new release version (command: npm install)
- All package.json files version will be updated to be in sync with pom revision number (e.g 1.2.3)
- Integrate existing changelogs from the `changeLogs` folder into the "ChangeLog" section of the `README.md` file for the new release version.
- Commit and push the updated `package.json` files, `pom.xml` file, and `README.md`.
- Create a merge request using as source the release branch and as target the master branch
- Upon merge to master branch you have to trigger pipeline manually in https://jenkins-compliance.athens.intrasoft-intl.private/view/ASSETS/job/assets-components/job/compliance-commons-fe/job/master/build?delay=0sec
- Upon job complition, verify that the new npm artifact exist on the private artifactory (https://nexus-compliance.athens.intrasoft-intl.private/#browse/browse:compliance-npm-releases)
- Create a tag with the name of the revision number (e.g `1.2.3`) and connect it with the corresponding merge commit (e.g., `Merge branch 'release/1.2.3' into 'master'`).
- Back merge master branch to develop branch keeping parent version and revision values on the pom.xml file of the develop branch


## Changelog


<details open>
<summary>Version 2.4.0</summary>

#### Fixes
- **Fixed an issue where the TypeField and TypeField2 SELECT components would corrupt item selection upon updating the list property.**
- **Fixed an issue where the onChange event for TypeField and TypeField2 was triggered when the field lost focus.**
- **Fixed the table style when row selection is enabled, addressed the selected row issue in the Table component and corrected the hasRowActions style in the Table header.**
#### Feature Enhancements
- **New Feature - Add an abstract version of Dialog, implemented with compound component approach**
- **New Feature - Add SimpleColumnPicker2 more abstract version of SimpleColumnPicker, implemented with compound component approach**
- **New Feature - Add Footer in Table, Table2 component**
</details>

<details>
<summary>Version 2.3.0</summary>

#### Feature Enhancements
- **New Feature - Add CardTree2 more abstract version of CardTree, implemented with compound component approach**
- **New Feature - Add Csv generator in utils folder with comprehensive unit tests**
- **New Feature - Configure tests with Nx Jest and add test scripts to `package.json`**
- **New Feature - Add Table2 a compound component version of Table, Table2 status: work in progress**
- **Refactor of Snackbar Component - Updated functionality for better performance and added `actionColor` prop to `MdcSnackbar` to customize action button color.**
</details>

<details>
<summary>Version 2.2.0</summary>

#### Updates
- **Dependencies**
  - **Upgraded `ids-wc` to version 4.3.0**
#### Fixes
- **Fix the issue where column visibility are reset after sorting columns in the Table Component**
#### Feature Enhancements
- **New Feature - Add default column sorting in Table Component**
- **New Feature - Add TypeField2 Component new simplified version of TypeField**


</details>

<details>
<summary>Version 2.1.0</summary>

#### Updates
- **Dependencies**
  - **Upgraded `nrwl`, `nx` packages to version 16.10.0**
  - **Upgraded `axios` package to version 1.6.8**
#### Fixes
- **Fix the single column sorting in Table Component**
#### Feature Enhancements
- **New Feature - Daterange in TypeField Component**
- **New Feature - Remove commons-fe deploy phase from pom.xml**
- **New Feature - Remove numeric type from HeaderCell and Row Components**
- **New Feature - Add adjustment functionality in TableCell**
- **New Feature - Add multi column sorting with ordering in Table Component**

</details>

<details>
<summary>Version 2.0.1</summary>

#### Updates
- **Dependencies**
  - **Upgraded `ids-wc` to version 4.2.0**
#### Fixes
- **Adjusted the Footer logo to match the appropriate color theme settings.**
- **Modified the CardUpload component to ensure the file input style is correctly hidden**

</details>

<details>
<summary>Version 2.0.0</summary>

#### Updates
- **Dependencies**
  - **Upgraded `ids-wc` to version 4.1.2**
  - **Upgraded `keycloak-js` to version 24.0.2** 
#### Fixes
- **Adapted to `ids-wc` breaking changes**

#### Feature Enhancements
- **New Feature - Ordering Columns in Table Component**

</details>