package cpt7_test

import "testing"
import "calculus/tgpl/cpt7"

func TestHello(t *testing.T) {
	p := cpt7.Point{1, 2}
	q := cpt7.Point{1, 2}
	cpt7.TestDistanceFunc(p, q)
}

func BenchmarkDistance(b *testing.B) {
	p := cpt7.Point{1, 2}
	q := cpt7.Point{1, 2}
	for i := 0; i < b.N; i++ {
		cpt7.TestDistanceFunc(p, q)
	}
}
