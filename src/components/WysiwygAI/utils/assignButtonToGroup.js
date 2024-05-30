export const assignButtonToGroup = (buttonName, group, editor) => {
    console.log('buttonGroups here')
    // Remove button from groups if already exists
    const curGroupList = listButtonsForGroup(editor);
    console.log('groupTest curGroupList', curGroupList)
    const groups = Object.keys(curGroupList);
    for (let i = 0; i < groups.length; ++i) {
        const group = curGroupList[groups[i]];
        console.log('groupTest', buttonName, groups[i], group);
        const test = group.find(entry => {
            console.log(`groupTest: [${entry}] [${buttonName}]`)
            return entry === buttonName
        });
        if (test) {
            console.log('groupTestMatch', buttonName, test)
            const config = {
                name: buttonName,
                group: groups[i]
            };
            console.log('groupTestConfig', config)
            editor.unregisterButton(config)
            break;
        }
    }

    // Register button for new group
    editor.registerButton({name: buttonName, group});
}