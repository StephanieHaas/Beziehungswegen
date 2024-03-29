require("dotenv").config();
const { resolve } = require("node:path");
const Client = require("ssh2-sftp-client");

void (async () => {
    const client = new Client();
    try {
        await client.connect({
            host: process.env.SFTP_HOST,
            user: process.env.SFTP_USER,
            password: process.env.SFTP_PASSWORD,
            secure: true,
            port: 22,
        });

        const sourceDir = resolve("./public");
        const targetDir = process.env.SFTP_TARGET;

        if (targetDir !== ".") {
            console.log(`Check if ${targetDir} exists`);
            const exist = await client.exists(targetDir);
            if (exist) {
                console.log(`Deleting ${targetDir}`);
                await client.rmdir(targetDir, true);
            }
        }

        console.log(`upload ${sourceDir} to ${targetDir}`);
        await client.mkdir(targetDir);
        await client.uploadDir(sourceDir, targetDir);
    } catch (err) {
        console.log(err);
    }
    await client.end();
})().catch((e) => {
    console.error(e);
});
