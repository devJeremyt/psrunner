$userEmail=$args[0]

Set-MsolUser -UserPrincipalName $userEmail -BlockCredential $true -Verbose