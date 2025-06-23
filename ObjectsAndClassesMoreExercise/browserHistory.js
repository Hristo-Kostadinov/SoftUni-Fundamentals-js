function browserHistory(browser, commands) {
    for (let command of commands) {
        let spaceIndex = command.indexOf(' ');
        let action = command.substring(0, spaceIndex);
        let site = command.substring(spaceIndex + 1);

        switch (action) {
            case 'Open':
                browser["Open Tabs"].push(site);
                browser["Browser Logs"].push(command);
                break;

            case 'Close':
                if (browser["Open Tabs"].includes(site)) {
                    let index = browser["Open Tabs"].indexOf(site);
                    browser["Open Tabs"].splice(index, 1);
                    browser["Recently Closed"].push(site);
                    browser["Browser Logs"].push(command);
                }
                break;

            case 'Clear':
                browser["Open Tabs"].length = 0;
                browser["Recently Closed"].length = 0;
                browser["Browser Logs"].length = 0;
                break;

            default:
                break;
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(', ')}`);
}
browserHistory
(
    {
        "Browser Name":"Google Chrome", 
    
        "Open Tabs":["Facebook","YouTube","Google Translate"],
    
        "Recently Closed":["Yahoo","Gmail"],
    
        "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
    },
    
    [
        "Close Facebook", "Open StackOverFlow", "Open Google"
    ]
)