$importPath=$args[0]

Import-Csv -Path $importPath |
ForEach-Object {Set-MsolUser -UserPrincipalName $_.UserPrincipalName -BlockCredential $true -Verbose} |
Export-Csv -Path "C:\Users\Jeremy\Documents\GCA\MSAccountImportsResults\20210630 - GCA Staff User Powershell Block SY20-21 Batch 1Results.csv"