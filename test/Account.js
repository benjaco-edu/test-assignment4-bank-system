const chai = require('chai');
chai.should();

const Account = require("../app/Account");


describe('Account', function () {
    describe("Get monthly interest", function () {
        let account;
        beforeEach(function () {
            account = new Account();
        });


        it('-1 throws', function () {
            (function () {
                account.setBalance(-1)
            }).should.throw(Error);
        });

        it('Works with 0', function () {
            account.setBalance(0);
            account.getMonthlyInterestRate().should.equal(0.03);
        });

        it('Works with 1', function () {
            account.setBalance(1);
            account.getMonthlyInterestRate().should.equal(0.03);
        });

        it('Works with 99.9', function () {
            account.setBalance(99.9);
            account.getMonthlyInterestRate().should.equal(0.03);
        });

        it('Works with 100', function () {
            account.setBalance(100);
            account.getMonthlyInterestRate().should.equal(0.03);
        });

        it('Works with 101', function () {
            account.setBalance(101);
            account.getMonthlyInterestRate().should.equal(0.05);
        });

        it('Works with 999d.9', function () {
            account.setBalance(999.9);
            account.getMonthlyInterestRate().should.equal(0.05);
        });

        it('Works with 1000', function () {
            account.setBalance(1000);
            account.getMonthlyInterestRate().should.equal(0.05);
        });

        it('Works with 1001', function () {
            account.setBalance(1001);
            account.getMonthlyInterestRate().should.equal(0.07);
        });


    });
})