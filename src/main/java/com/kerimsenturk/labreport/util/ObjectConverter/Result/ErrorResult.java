package com.kerimsenturk.labreport.util.ObjectConverter.Result;

public class ErrorResult extends Result{
	public ErrorResult() {
		super(false);
	}
	
	public ErrorResult(String message) {
		super(false,message);
	}
}
