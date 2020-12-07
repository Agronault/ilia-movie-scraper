

db.createUser({
    user: "ilia",
    pwd: "ilia#2020challenge",
    roles: [
        {
            role: "readWrite",
            db: "ilia"
        }
    ]
});
