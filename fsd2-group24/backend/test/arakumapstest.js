// const mongoose = require('mongoose');
// const arakumaps = require("../models/arakumapsModel");

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../server.js");

// chai.should();
// chai.use(chaiHttp);

// describe("Tests Api's for arakumaps",()=>{

//     //Test Get
//     describe("GET ALL ARAKU MAPS LIST",()=>{
//         it("It should return all arakumaps list",(done)=>{
//             chai.request(server)
//             .get("/arakumaps")
//             .end((err,response)=>{
//                 console.log(response.body[0])
//                 arakumaps = response.body[0]
//                 arakumaps.should.be.a('object');
//                 arakumaps.should.have.property('id');
//                 arakumaps.should.have.property('name');
//                 arakumaps.should.have.property('lng');
//                 arakumaps.should.have.property('lat');
//                 arakumaps.should.have.property('image');

//             })
//             done();
            
//         })
//     })

    
// })