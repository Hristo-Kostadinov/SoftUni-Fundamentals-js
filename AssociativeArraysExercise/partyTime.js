function partyTime (arr) {
    const vipMembers = [];
    const regularMembers = [];

    let partyIndex = arr.indexOf(`PARTY`);

    for (let i = 0; i < partyIndex; i++) {
        const memberInvitation = arr[i];

        if (!isNaN(memberInvitation[0])) {
            vipMembers.push(memberInvitation);
        } else {
            regularMembers.push(memberInvitation);
        }
    }

    for (let j = partyIndex + 1; j < arr.length; j++) {
        const membersNotComing = arr[j];

        const vipIndex = vipMembers.indexOf(membersNotComing);
        if (vipIndex !== -1) {
            vipMembers.splice(vipIndex, 1);
        }

        const regularIndex = regularMembers.indexOf(membersNotComing);
        if (regularIndex !== -1) {
            regularMembers.splice(regularIndex, 1);
        }
    }
    
    const totalMembersComing = vipMembers.concat(regularMembers);

    console.log(totalMembersComing.length);
    console.log(totalMembersComing.join(`\n`));

}
partyTime
([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE', 
    'SVQXQCbc', 
    'tSzE5t0p', 
    'PARTY', 
    '9NoBUajQ', 
    'Ce8vwPmE', 
    'SVQXQCbc' 
])