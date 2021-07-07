$importPath=$args[0]
$exportPath=$args[1]

Import-Csv -Path $importPath |
ForEach-Object {Set-MsolUser -UserPrincipalName $_.UserPrincipalName -BlockCredential $false -Verbose} | 
Export-Csv -Path $exportPath