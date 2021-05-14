# Digital Growth Charts Hazard Log

This repository exists to provide a place to record Hazards identified in relation to the RCPCH Digital Growth Charts platform. Instead of the more usual and somewhat outdated and chaotic 'spreadsheet' model, often used for Hazard Logs, we are using the [Issues](https://github.com/rcpch/digital-growth-charts-hazard-log/issues) facility in GitHub to record Hazards.

* *Labels* are used to annotate Hazard Issues with `severity-` and `likelihood-` scores, from which we can derive a `risk-level-`. See all Labels [here](https://github.com/rcpch/digital-growth-charts-hazard-log/labels)

* *Milestones* are used to designate the Initial Risk Assessment and Residual Risk Assessment. See all Milestones [here](https://github.com/rcpch/digital-growth-charts-hazard-log/milestones)

Most importantly, the **discussion and evidence** relating to any given risk is included in the recording of the risk. A complete history of the labelling is kept in the issue. Spreadsheet-based risk and hazard handling is inferior to this model, because spreadsheets are unsuited to discussion, text handling, and long-form discourse.

> A Hazard which is *never* recorded in any Spreadsheet-based Hazard Log is 'Accidental deletion of a Hazard before it has been mitigated/risk-eliminated', yet anyone who has used a spreadsheet knows how easy it is to accidentally delete or modify a cell or row inadvertently.
> Put simply, a spreadsheet is a poor choice of technology for managing text and a totally unacceptable choice of technology for handling Hazards, yet it has become the industry standard across the NHS simply because the Hazard Log template issued by NHS Digital is a spreadsheet. Building and releasing an open source, free **Hazard Log management platform** would have been much a better approach, which NHS DIgital had ans still has the resources to do, but lack of understanding about the case of need limits their capability to execute on this.

## Monitoring of Risk
Using the Label search feature, one can search for Hazards at any Risk Level, in order to triage the most risky Hazards for further action.

[risk-level-5-unacceptable](https://github.com/rcpch/digital-growth-charts-hazard-log/labels/risk-level-5-unacceptable)  
[risk-level-4-mandatory-risk-elimination](https://github.com/rcpch/digital-growth-charts-hazard-log/labels/risk-level-4-mandatory-risk-elimination)  
[risk-level-3-undesirable](https://github.com/rcpch/digital-growth-charts-hazard-log/labels/risk-level-3-undesirable)  
[risk-level-2-acceptable](https://github.com/rcpch/digital-growth-charts-hazard-log/labels/risk-level-2-acceptable)  
[risk-level-1-acceptable](https://github.com/rcpch/digital-growth-charts-hazard-log/labels/risk-level-1-acceptable)  

* We can filter for multiple labels.

## Deletion
Hazards are never deleted but may be closed if no longer relevant.

## Alternative views
We are planning to develop a simple application which can view Issues in a tabular form, for familiarity.

## Creating a Hazard
1. Navigate to [Issues](https://github.com/rcpch/digital-growth-charts-hazard-log/issues)
2. Click on New Issue
3. Use the Hazard Issue Template to guide you through the necessary information
4. Label according to Severity and Likelihood, then calculate Risk Level
5. Assign to CSO @pacharanero
6. Save
