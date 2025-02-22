import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '5720107f0c9042ddbb67fbe0f2437c9c'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '104da7e43cf941e0be4440b785089f41'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'c4da43b622ee4f30973f641f465f21a9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1bfe47ca470743898871f87e02041f59'
                    }
                }
            }
        }
    }
}
