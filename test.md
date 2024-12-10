# Problem Statement
As an automation tester , I have identified a challenge in automating the KYC process for testing purposes. 
The current setup requires testing KYC workflows via mobile devices and QR codes, which complicates automation efforts and adds dependencies on external devices.
This hinders efficient test execution and repeatability.

## Solution 1: Mock KYC verifaction via Feature Flags
Implement feature flags to toggle between mock and real KYC workflows.
When the mock feature is enabled, the backend simulates API responses, avoiding the need for mobile devices and external systems.

## Solution 2: DAON Sandbox for Automated Testing
Collaborate with DAON to provide a sandbox environment for automation testing.
Enable direct browser-based uploads of fake selfies/documents and simulation of KYC outcomes within the testing environment.

These solutions aim to reduce dependencies, streamline the testing workflow, and make the process more automation-friendly. The ideal approach would involve a collaboration with DAON to enable sandbox testing capabilities.
