const express = require('express')
require('dotenv').config()
const router = express.Router()


const mysql = require('mysql2/promise')
const mysqlPool = mysql.createPool(process.env.URL_SQL)

router.get('/',async(req,res)=>{
    const [rows] = await mysqlPool.query(
        `SELECT * FROM table_name;`
      )
      res.json(rows)
})

router.get('/:id',async(req,res)=>{
    const id = req.params.id
    try{
     
        const [rowsid] = await mysqlPool.query(
            `SELECT * FROM table_name WHERE id = ${id};`
        )
        if(rowsid.length>0){
            res.json(rowsid)
        }else{
            res.json({"Error message":"Not Found Exam"})
        }
    }catch(err){
        res.json({"error":"You entered an incorrect value."})

    }
    
})


module.exports = router