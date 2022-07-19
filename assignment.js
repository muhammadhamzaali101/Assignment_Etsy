describe('aSSIGNMENT _ MUHAMMAD HAMZA ALI', function() 
{
    beforeEach("Loading Website", ()=>{

        cy.LoadingWeb()

    })
    
    it('Signup', function() {

        cy.fixture('data').then(data => {    
            for(let value of data)
            {
                
                cy.OpenForm()
                cy.get('button.wt-btn--secondary:nth-child(2)').should('be.visible').click()
                
                cy.wait(1000)
                cy.input('#join_neu_email_field',value.email)
                
                cy.input('#join_neu_first_name_field',value.name)
                
                cy.input('#join_neu_password_field',value.pass)

                cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(9) > div > button').should('be.visible').click()
                
                cy.verifyHome()

                cy.verifyLogInAndSignOut()
            }
        })
        
    })

    it('SignIn', function() {

        cy.fixture('data').then(data => {    
            for(let value of data)
            {
                cy.OpenForm()

                cy.log(value.email)

                cy.input('#join_neu_email_field',value.email)
                
                cy.input('#join_neu_password_field',value.pass)

                cy.get('button.wt-width-full:nth-child(1)').should('be.visible').click()

                cy.verifyHome()

                cy.verifyLogInAndSignOut()
            }
        })

    })

    it('Invalid SignIn - Failed Attempt', function() {

        cy.OpenForm()

        cy.input('#join_neu_email_field','temp1@gmail.com')
        
        cy.input('#join_neu_password_field','temppppppppp')
        
        cy.get('button.wt-width-full:nth-child(1)').should('be.visible').click()

        cy.wait(2000)

        cy.get('#aria-join_neu_password_field-error').should('be.visible')
                
         

    })

    it('Add/Delete/Edit Order', function() {
        
        cy.input('#global-enhancements-search-query','vintage')

        cy.get('#gnav-search > div > div.wt-input-btn-group.global-enhancements-search-input-btn-group.wt-menu__trigger.emphasized_search_bar.emphasized_search_bar_grey_bg > button > span')
        .should('be.visible').click()

        
        cy.wait(2000)
        
        cy.log('Adding and editing Product to basket')
        
        cy.get('.tab-reorder-container > li:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form')
        .should('be.visible').click()

        cy.wait(4000)
        
        cy.get('#checkout > div > div.wt-pb-xs-4 > div > div > div:nth-child(1) > h1').should('be.visible').contains('1 item in your basket')

        cy.input('textarea.wt-height-full','This is the note written by automated script...and i am going to edit this').type('{selectall}{backspace}')

        cy.log('Deleting Product from basket')

        cy.get('li.wt-pr-xs-1 > a:nth-child(1)').should('be.visible').contains('Remove').click()
        

    })


    it('SignIn Using Gmail Option', function() {

        cy.OpenForm()
        
        cy.get('div.wt-mb-xs-2:nth-child(1) > div:nth-child(1) > button:nth-child(3)').should('be.visible').click()
        
        // This will route to gmail and third part application are not supposed to be automated
        
    })


})