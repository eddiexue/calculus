package cpt7

import (
	"bytes"
	"flag"
	"fmt"
	"io"
	"math"
	"os"
	"time"
)

type Point struct{ X, Y float64 }

// same thing, but as a method of the Point type
func distance(p, q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

type MyWriter struct {
	buflen int
}

func (mw *MyWriter) Write(p []byte) (n int, err error) {
	return len(p), nil
}

func test() {
	var w io.Writer
	w = os.Stdout         // OK: *os.File has Write method
	w = new(bytes.Buffer) // OK: *bytes.Buffer has Write method
	_ = w

	mw := &MyWriter{buflen: 100}
	w = mw
	//---------------------------

	var period = flag.Duration("period", 3*time.Second, "sleep period")

	flag.Parse()
	fmt.Println("Sleeping for %v", *period)
	time.Sleep(*period)
	fmt.Println()
}
