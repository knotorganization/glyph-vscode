import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { compileGlyph } from "./compiler";

export function activate(context: vscode.ExtensionContext) {
  const buildCommand = vscode.commands.registerCommand(
    "glyph.build",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor");
        return;
      }

      const doc = editor.document;

      if (doc.languageId !== "glyph") {
        vscode.window.showErrorMessage("Not a Glyph file");
        return;
      }

      try {
        const source = doc.getText();
        const output = compileGlyph(source);

        const outPath = doc.uri.fsPath.replace(/\.glyph$/, ".html");
        fs.writeFileSync(outPath, output, "utf8");

        vscode.window.showInformationMessage(
          `Glyph compiled → ${path.basename(outPath)}`
        );
      } catch (err: any) {
        vscode.window.showErrorMessage(err.message);
      }
    }
  );

  context.subscriptions.push(buildCommand);
}

export function deactivate() {}