from django.shortcuts import render , redirect

def home(request):
    return render(request , "base.html")

def save(request):
    return redirect("home")
