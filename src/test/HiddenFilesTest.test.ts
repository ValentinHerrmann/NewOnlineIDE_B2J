import { expect, test } from 'vitest'
import { CompilerFile } from '../compiler/common/module/CompilerFile';

test('CompilerFile.isHidden() detects double-underscore prefixed hidden files', () => {
    const file1 = new CompilerFile("Main.java");
    const file2 = new CompilerFile("__scaffold.java");
    const file3 = new CompilerFile("other.txt");
    const file4 = new CompilerFile(".scaffold.java");

    expect(file1.isHidden()).toBe(false);
    expect(file2.isHidden()).toBe(true);
    expect(file3.isHidden()).toBe(false);
    expect(file4.isHidden()).toBe(false);
});
