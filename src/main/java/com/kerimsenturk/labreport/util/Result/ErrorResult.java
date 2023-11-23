package com.kerimsenturk.labreport.util.Result;

public class ErrorResult extends Result{
	
	public ErrorResult() {
		super(false);
	}
	
	public ErrorResult(String message) {
		super(false,message);
	}
}
