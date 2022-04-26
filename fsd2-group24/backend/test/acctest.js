// const mongoose = require('mongoose');
// const accomodation = require("../models/accomodationModel");

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../server.js");

// chai.should();
// chai.use(chaiHttp);

// describe("Tests Api's for accomodations",()=>{

//     //Test Get
//     describe("GET ALL ACCOMODATIONS LIST",()=>{
//         it("It should return all accomodations list",(done)=>{
//             chai.request(server)
//             .get("/accommodation")
//             .end((err,response)=>{
//                 console.log(response.body[0])
//                 accomodation = response.body[0]
//                 accomodation.should.be.a('object');
//                 accomodation.should.have.property('id');
//                 accomodation.should.have.property('name');
//                 accomodation.should.have.property('description');
//                 accomodation.should.have.property('image');
//                 accomodation.should.have.property('rating');

//             })
//             done();
            
//         })
//     })

    
// })