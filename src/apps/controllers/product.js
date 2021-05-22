const fs = require("fs");
const path = require("path");
const { spawn } = require('child_process');

const create = (req,res)=>{
    res.render("admin/add__product");
}

const store = async (req,res)=>{
    const file = req.file;
    console.log(file);
    fs.renameSync(file.path, path.resolve("src/public/images/products", file.originalname));

    const bat = await spawn('cmd.exe', ["/c", `cd src/public/images/products && npx gltfjsx ${file.originalname}`]);

    bat.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    bat.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    bat.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
    });
}

module.exports = {
    create:create,
    store:store,
}