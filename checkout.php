<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">

    <script src="checkout.js" async></script>
    <script src="creditdelivery.js" async></script>

</head>

<body>

    <div class="header">
        <h1 id="storeName">Stephanie Cafe</h1>
    </div>

    <div class="wrapper">
        

        <div class="main-checkout">
            <h1>CHECKOUT</h1>
            <div id="checkoutForm">
                <center><h2 id="category-title">Payment Form</h2></center>
                <div id="formCheck">
                    <table id="itemTable">
                        <tr><th>Item</th><th>Price</th><th>Quantity</th><th>SubTotal</th></tr>
                    </table>
                    <p class="currency-holder">Subtotal:<span id="subtotal" class="currency-text"></span></p>
                    <p class="currency-holder">Delivery Fee:<span id="delivery" class="currency-text"></span></p>
                    <hr>
                    <p class="currency-holder price-total">Total:<span id="total" class="currency-text"></span></p>
                
                    
                    <form id="deliverycredit" name="deliverycredit" method="post" action="success.php">
                            <fieldset>
                              <legend><h3>Delivery address</h3></legend>
                              <label for="mailing-address-1" >Street address 1*</label>
                              <input id="mailing-address-1" name="mailing-address-1" type="text" required>
                          
                              <label for="mailing-address-2">Street address 2</label>
                              <input id="mailing-address-2" name="mailing-address-2" type="text">
                          
                              <div>
                                <div>
                                  <label for="city">City*</label>
                                  <input id="city" name="city" type="text" required>
                                </div>
                          
                                <div>
                                  <label for="state">State*</label>
                                  <select id="state" name="state" required>
                                    <option value>- Select -</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                    <option value="AA">AA - Armed Forces Americas</option>
                                    <option value="AE">AE - Armed Forces Africa</option>
                                    <option value="AE">AE - Armed Forces Canada</option>
                                    <option value="AE">AE - Armed Forces Europe</option>
                                    <option value="AE">AE - Armed Forces Middle East</option>
                                    <option value="AP">AP - Armed Forces Pacific</option>
                                  </select>
                                </div>
                              </div>
                          
                              <label for="zip">ZIP*</label>
                              <input id="zip" name="zip" type="text" pattern="[\d]{5}(-[\d]{4})?" required>
                            </fieldset>         
                            <fieldset id="creditcard">
                                <legend>  <h3>Credit Card Information</h3></legend>  
                               <label for="cardHolder">Card Holder*</label>
                               <input name="cardHolder" id="cardHolder" required type="text" />              
                   
                               <fieldset id="cards">
                                  <label class="cardLabel">Credit Company*</label>
                                  <label class="cardLabel">
                                     <input name="company" value="amex" type="radio" required />
                                     <img src="co_amex.png" alt="American Express" />
                                  </label>
                                  <label class="cardLabel">               
                                     <input name="company" value="discover" type="radio" />
                                     <img src="co_discover.png" alt="Discover" />
                                  </label>
                                  <label class="cardLabel">                  
                                     <input name="company" value="master" type="radio"  />
                                     <img src="co_master.png" alt="MasterCard" />
                                  </label>
                                  <label class="cardLabel">                  
                                     <input name="company" value="visa" type="radio"  />
                                     <img src="co_visa.png" alt="Visa" />
                                  </label>
                               </fieldset>          
                   
                               <label for="cardNumber">Credit Card Number*</label>
                               <input name="cardNumber" id="cardNumber" required type="text"
                               pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$" />
                   
                               <label for="expDate">Expiration Date*</label>
                               <input name="expDate" id="expDate" required type="text" placeholder="mm/yyyy" />
                   
                               <label for="cvc">CVC*</label>
                               <input name="cvc" id="cvc" required pattern="^\d{3,4}$" type="text"/>
                            </fieldset>
                   
                            <p id="footnote">* - Required Item</p>        
                            <input type="submit" id="subButton" value="Submit Payment" />         
                         </form>
                </div>
                

            </div>

        </div>


    </div>

    <div class="footer">© copyright </div>

</body>

</html>