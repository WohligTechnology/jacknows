/**
 * ContentController
 *
 * @description :: Server-side logic for managing Contents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

  module.exports = {
    saveData: function(req, res) {
           if (req.body) {
               Content.saveData(req.body, res.callback);
           } else {
               res.json({
                   value: false,
                   data: "Invalid call"
               });
           }
       },
       delete: function(req,res){
         if(req.body){
           if (req.body._id && req.body._id != "") {
           //	console.log("not valid");
               Content.deleteData(req.body, function(err, respo) {
                   if (err) {
                       res.json({
                           value: false,
                           data: err
                       });
                   } else {
                       res.json({
                           value: true,
                           data: respo
                       });
                   }
               });
           } else {
               res.json({
                   value: false,
                   data: "Invalid Id"
               });
           }
         }else {
             res.json({
                 value: false,
                 data: "Invalid call"
             });
         }
       },
  getAll: function(req, res) {

        if (req.body) {
            Content.getAll(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: "Invalid call"
            });
        }
    },

  };
