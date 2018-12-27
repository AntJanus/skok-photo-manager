"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var walker = require("walker");
function walkPhotos(photoPath, visitor) {
    return new Promise(function (resolve, reject) {
        var queuedPromises = 0;
        walker(photoPath)
            .on('file', function (file) {
            queuedPromises++;
            var stats = fs.statSync(file);
            var fileObj = constructFileObject(file, stats);
            visitor(fileObj, function () { return queuedPromises--; });
        })
            .on('end', resolve)
            .on('error', reject);
    });
}
exports.walkPhotos = walkPhotos;
function constructFileObject(file, stats) {
    var parsedPath = path.parse(file);
    return {
        name: parsedPath.name,
        file_name: parsedPath.base,
        full_path: path.resolve(file),
        file_type: parsedPath.ext.slice(1).toLowerCase(),
        size: stats.size,
        created_at: new Date(stats.birthtime),
        updated_at: new Date(stats.mtime)
    };
}
