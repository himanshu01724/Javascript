function Output({bill,tip}){
    return(
    <div>
        <h4>Your Total Bill ${bill+tip} (${bill} + ${tip} tip)</h4>
        {console.log(`Output Value = ${bill}, Tip value = ${tip}`)}
    </div>
    )
}
export default Output;