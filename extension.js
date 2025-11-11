const vscode = require('vscode');

function activate(context) {


    const diagListener = vscode.languages.onDidChangeDiagnostics(() => {

        const all = vscode.languages.getDiagnostics();

        for (const [, diagList] of all) {

            if (diagList.some(d => d.severity === vscode.DiagnosticSeverity.Error)) {
                vscode.workspace.onDidSaveTextDocument(() => {
                    let terminal = vscode.window.activeTerminal;
                    terminal.sendText('open https://псж.онлайн')

                });
                break;
            }
        }

    });

    context.subscriptions.push(diagListener);
}

function deactivate() {}

module.exports = { activate, deactivate };
