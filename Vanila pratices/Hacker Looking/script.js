let hack_lines = [
    "Connecting to server.....",
    'Getting info....',
    'Preparing for hack....',
    'Finding username....',
    'User name found....',
    'Connecting with instagram server....',
    "Connection failed....",
    "Trying again....",
    "Connection failed....",
    "Trying again....",
    "Connection failed....",
    "Trying again....",
    'Connection success....',
    'Trying combination of 250K passwords....',
    'Failed....',
    'Trying another combination of 250K passwords....',
    'Failed....',
    'Trying another combination of 250K passwords....',
    'Password match....',
    "User account successfully hacked...."
];

let p = async (line) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(line);
        }, 3000);
    });
};

(async () => {
    for (const line of hack_lines) {
        const result = await p(line);
        if (line == "Connection failed...." ||line == "Failed...." ) {
            console.error(result);
        }
        else{
            console.log(line)
        }
        
    }
})();
