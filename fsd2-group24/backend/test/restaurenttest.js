// const mongoose = require('mongoose');
// const restaurent = require("../models/restaurentModel");

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const server = require("../server.js");

// chai.should();
// chai.use(chaiHttp);

// describe("Tests Api's for restaurents",()=>{

//     //Test Get
//     describe("GET ALL RESTAURENTS LIST",()=>{
//         it("It should return all restaurents list",(done)=>{
//             chai.request(server)
//             .get("/restaurent")
//             .end((err,response)=>{
//                 console.log(response.body[0])
//                 rest = response.body[0]
//                 rest.should.be.a('object');
//                 rest.should.have.property('id');
//                 rest.should.have.property('name');
//                 rest.should.have.property('description');
//                 rest.should.have.property('image');
//                 rest.should.have.property('rating');

//             })
//             done();
            
//         })
//     })

//     //Test post
//     // describe("POSTS A restaurent", ()=>{
//     //     it('It should POST a restaurent ', (done) => {
//     //         let restaurent = {
//     //             name: "Kamat Restaurant",
//     //             description: "Beach Road, Lawsons Bay Colony, Visakhapatnam",
//     //             image: "./images/kamat.jpg",
//     //             rating: 5
//     //         }
//     //           chai.request(server)
//     //           .post('/restaurent')
//     //           .send(restaurent)
//     //           .end((err, res) => {
//     //                 console.log(res.body)
//     //                 res.body.should.be.a('object');
//     //                 res.body.should.have.property('id');
//     //                 res.body.should.have.property('name');
//     //                 res.body.should.have.property('description');
//     //                 res.body.should.have.property('image');
//     //                 res.body.should.have.property('rating');

//     //             done();
//     //           });
//     //     });
    
//     // })
// })