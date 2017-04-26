package main

import (
	"calculus/charts"
	"html/template"
	"log"
	"net/http"
	"os"
)

func ServeExample(w http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	if r.URL.Path != "/mline" && r.URL.Path != "/mlinedaul" {
		http.Error(w, "Not found", 404)
		return
	}
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", 405)
		return
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	if r.URL.Path == "/mline" {
		tpl, err := template.ParseFiles("tpls/egmline.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		tpl.Execute(w, r.Host)
		return
	}

	if r.URL.Path == "/mlinedaul" {
		tpl, err := template.ParseFiles("tpls/egmlinedaul.html")
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}
		tpl.Execute(w, r.Host)
		return
	}
}

func main() {
	log.Println("Starting serivces...")

	//创建https文件服务
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.HandleFunc("/mline", ServeExample)
	http.HandleFunc("/mlinedaul", ServeExample)
	http.HandleFunc("/charts/", charts.ServeChart)
	err := http.ListenAndServe(":9527", nil)

	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	//代码不会执行到这里来！！
}
