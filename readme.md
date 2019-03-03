# Test assignment 4 - bank system

https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/04%20Specification%20Based%20Testing%20Techniques%20Assignment.pdf

![Assignment definition](https://raw.githubusercontent.com/benjaco-edu/test-assignment4-bank-system/master/assignment.png)

#### 1

All the code for the banking system has been implemented and can be found in the src/ folder.

#### 2

The tests can be found in test/Account.js and test/Customer.js.

#### 3 & 4

The test can be found in test/Customer.js, there is no standard method for repeated and parameterized tests, so I had to be creative / found out how other people has done it.

See my comments over each section in the code

#### 5

There is a little unused unmaintained independent developed version of hamcrest for javascript, so I did not use that of cause, the goto assertion library for javascript is called chai which has been used.

#### 6

My expansion of the system was to generate a welcome message in the ATM class, it has been tested with multiple balances in a parameterized test in test/ATM.js

#### 7

getMonthlyInterestRate has been tested with equivalence partitioning testing and boundary values in tests/Account.js

Customer.getDiscount has been tested with a decision table in test/Customer.js with all the different combinations of newCustomer, loyaltyCard, coupon.

No state transitions has been used, find them in the next assignment where the ATM class is tested.

Data driven tests has been used in part of the parameterized tests for Customer.getDiscount.


## Notes & Modification

The code for get discount has been places in the customer class instead, it is because the discount isn't tired to a credit card, but an account instead, and the customer class is the responsible class to create an account

The csv tests do not test the date where the discount runs out, moch the date is for the next assigment.



## Result

```
npm test

> test-bank-system@1.0.0 test /home/benjamin/Desktop/test-bank-system
> mocha



  ATM
    Print welcome message
      ✓ Prints hi, you have 5.00
      ✓ Prints hi, you have 10.00
      ✓ Prints hi, you have 11.20
      ✓ Prints hi, you have 11.55

  Account
    Get monthly interest
      equivalence partitioning testing
        ✓ Works with 35
        ✓ Works with 864
        ✓ Works with 1598
      Boundary values
        ✓ -1 throws
        ✓ Works with 0
        ✓ Works with 1
        ✓ Works with 99.9
        ✓ Works with 100
        ✓ Works with 101
        ✓ Works with 999d.9
        ✓ Works with 1000
        ✓ Works with 1001

  Customer
    Get discount
      ✓ Run #0 - New customer cant have a loyalty card and coupon
      ✓ Run #0 - New customer cant have a loyalty card
      ✓ Run #1 - New customer cant have a loyalty card and coupon
      ✓ Run #1 - New customer cant have a loyalty card
      ✓ Run #2 - New customer cant have a loyalty card and coupon
      ✓ Run #2 - New customer cant have a loyalty card
      ✓ simple loop - Customer.getDiscount(true, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ simple loop - Customer.getDiscount(true, false, false) should be {"discount":0.15,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ simple loop - Customer.getDiscount(false, true, true) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ simple loop - Customer.getDiscount(false, true, false) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ simple loop - Customer.getDiscount(false, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ simple loop - Customer.getDiscount(false, false, false) should be {"discount":0,"until":null} (time in utc)
      ✓ from function - Customer.getDiscount(true, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ from function - Customer.getDiscount(true, false, false) should be {"discount":0.15,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ from function - Customer.getDiscount(false, true, true) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ from function - Customer.getDiscount(false, true, false) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ from function - Customer.getDiscount(false, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ from function - Customer.getDiscount(false, false, false) should be {"discount":0,"until":null} (time in utc)
      ✓ Params test - Customer.getDiscount(true, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ Params test - Customer.getDiscount(true, false, false) should be {"discount":0.15,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ Params test - Customer.getDiscount(false, true, true) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ Params test - Customer.getDiscount(false, true, false) should be {"discount":0.1,"until":"9998-12-31T23:00:00.000Z"} (time in utc)
      ✓ Params test - Customer.getDiscount(false, false, true) should be {"discount":0.2,"until":"2019-03-03T23:00:00.000Z"} (time in utc)
      ✓ Params test - Customer.getDiscount(false, false, false) should be {"discount":0,"until":null} (time in utc)
      ✓ param csv test - Customer.getDiscount(true, false, true) should have the discount of .2
      ✓ param csv test - Customer.getDiscount(true, false, false) should have the discount of .15
      ✓ param csv test - Customer.getDiscount(false, true, true) should have the discount of .1
      ✓ param csv test - Customer.getDiscount(false, true, false) should have the discount of .1
      ✓ param csv test - Customer.getDiscount(false, false, true) should have the discount of .2
      ✓ param csv test - Customer.getDiscount(false, false, false) should have the discount of 0
      ✓ param csv file test - Customer.getDiscount(true, false, true) should have the discount of .2
      ✓ param csv file test - Customer.getDiscount(true, false, false) should have the discount of .15
      ✓ param csv file test - Customer.getDiscount(false, true, true) should have the discount of .1
      ✓ param csv file test - Customer.getDiscount(false, true, false) should have the discount of .1
      ✓ param csv file test - Customer.getDiscount(false, false, true) should have the discount of .2
      ✓ param csv file test - Customer.getDiscount(false, false, false) should have the discount of 0


  52 passing (28ms)

```

## Run it

Run `npm install` and the the shown commandos (requires node)

Or run it with docker

`sudo docker run -it --rm bslcphbussiness/test-assignment-4-bank-system`