const fs = require('fs')

const path = db_name => './server/JSON_DB/JSON_DB_FILES/' + db_name + '.json';

// утилита для считывания json из файла по названию
const JSON_DB_READ_NOTES = (DB_NAME) => {
    return  fs.readFileSync(path(DB_NAME), "utf-8")
}


const JSON_DB_WRITE_NOTES = (DB_NAME, json) => {
    fs.writeFileSync(path(DB_NAME), JSON.stringify(json))
}

const JSON_DB_ADD_NOTE = (DB_NAME, NOTE) => {}

const JSON_DB_REMOVE_NOTE = (DB_NAME, SEARCH_PARAM) => {}

module.exports = {
    JSON_DB_READ_NOTES,
    JSON_DB_WRITE_NOTES,
    JSON_DB_ADD_NOTE,
    JSON_DB_REMOVE_NOTE
}