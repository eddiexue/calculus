package cpt7_test

import "testing"
import "fmt"

func TestDistance(t *testing.T) {
	p := Point{1, 1}
	q := &Point{5, 4}
	if Distance(p, q) < 0 {
		fmt.Println("error occured")
	}
}
