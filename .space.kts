job("Qodana") {
    startOn {
        gitPush {
            anyBranchMatching {
            +"master"
        }
    }
    codeReviewOpened{}
    }
    container("jetbrains/qodana-js") {
        env["QODANA_TOKEN"] = "{{ eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb24iOiJwUWRRbCIsInByb2plY3QiOiIzakJkNCIsInRva2VuIjoiM1h5eDEifQ._chdz6FQFVgXlQSajVM1Ryt0sEx-i6P1WCP4k8lkVFI }}"
        shellScript {
            content = "qodana"
        }
    }
}