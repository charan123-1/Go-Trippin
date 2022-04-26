//const mongoose = require('mongoose');
//const hydmaps = require("../models/hydmapsModel");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");

chai.should();
chai.use(chaiHttp);

describe("Tests Api's for hydmaps",()=>{

    //Test Get
    describe("GET ALL HYDERABAD MAPS LIST",()=>{
        it("It should return all hydmaps list",(done)=>{
            chai.request(server)
            .get("/hydmaps")
            .end((err,response)=>{
                console.log(response.body[0])
                hydmaps = response.body[0]
                hydmaps.should.be.a('object');
                hydmaps.should.have.property('id');
                hydmaps.should.have.property('name');
                hydmaps.should.have.property('lng');
                hydmaps.should.have.property('lat');
                hydmaps.should.have.property('image');

            })
            done();
            
        })
    })

    
})