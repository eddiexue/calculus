package main

import (
	"fmt"
)


func main(){
	totalPrice := 1450000.0	//总价
	downPaymentRatio := 0.3	//首付比例
	standardRate := 0.049	//基准利率
	rateDiscount := 0.9		//利率折扣

	extralDiscount := 0.02	//额外优惠
	rewardRatio := 0.5		//酬金比例

	//--------------------------------

	totalSave := totalPrice * extralDiscount
	fmt. Printf("总价节省：%.0f\n", totalSave)

	reward := totalPrice *  extralDiscount * rewardRatio
	fmt. Printf("支付酬金：%.0f\n", reward)

	realDownPayment := totalPrice * (1-extralDiscount) * downPaymentRatio + reward
	originDownPayment := totalPrice * downPaymentRatio
	fmt. Printf("实际首付：%.0f\n", realDownPayment)
	fmt. Printf("原价首付：%.0f\n", originDownPayment )
	fmt. Printf("首付多出：%.0f\n", realDownPayment - originDownPayment )

	fmt.Println()
	fmt.Printf("总价节省的%.0f，实际只需支付本金：%.0f来贷款，剩下的%.0f未来每年可能产生的利息为:\n", totalSave, totalSave*downPaymentRatio, totalSave*(1-downPaymentRatio))
	for i,r := 1,0.0; r < (reward); i++{
		r += totalSave*(1-downPaymentRatio) * standardRate * rateDiscount
		fmt.Printf("\t[第%d年] %.0f\n", i , r)
	}

	for j := 1.0; j < 10; j++ {
		fmt.Printf("%.0f\n", 2000000 - (totalPrice-originDownPayment) * standardRate * rateDiscount * j -  (totalPrice-originDownPayment) )
		fmt.Printf("%.0f\n\n", 2000000 - (totalPrice - realDownPayment) * (1 - extralDiscount) * standardRate * rateDiscount * j - (realDownPayment -originDownPayment ) - (totalPrice - realDownPayment) )
	}
}