describe('logar no sadbox', () => {
    it('passes', () => {
        cy.visit('https://sandbox311.moodledemo.net/login/index.php')
        cy.request({
            url: '/lib/ajax/service-nologin.php?info=core_output_load_template_with_dependencies&cachekey=1682348474&args=%5B%7B%22index%22%3A0%2C%22methodname%22%3A%22core_output_load_template_with_dependencies%22%2C%22args%22%3A%7B%22component%22%3A%22core_form%22%2C%22template%22%3A%22element-passwordunmask-fill%22%2C%22themename%22%3A%22boost%22%2C%22lang%22%3A%22pt_br%22%7D%7D%5D',
            method: 'GET'
        }).then(({ status, duration }) => {
            expect(status, 'Status Code').to.eq(200)
            expect(duration, 'Duração').to.be.lessThan(1000)
        })
    })
})
