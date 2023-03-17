
import {
    ExtensionContext,
    WorkspaceConfiguration,
    workspace
} from 'vscode';

import {
    Executable,
    LanguageClient,
    LanguageClientOptions,
    ServerOptions
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(_context: ExtensionContext) {

    const config: WorkspaceConfiguration = workspace.getConfiguration("oal");

    const serverPath = config.get<null | string>("serverPath") ?? "oal-lsp";

    const serverExec: Executable = {
        command: serverPath
    }

    const serverOptions: ServerOptions = {
        run: serverExec,
        debug: serverExec
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'oal' }]
    };

    client = new LanguageClient(
        'oal-server',
        'OpenAPI Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
