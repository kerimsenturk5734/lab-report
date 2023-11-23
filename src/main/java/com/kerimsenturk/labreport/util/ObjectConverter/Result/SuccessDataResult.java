package com.kerimsenturk.labreport.util.ObjectConverter.Result;

public class SuccessDataResult<T> extends DataResult<T>{

	public SuccessDataResult(T data, String message) {
		super(data, true, message);
	}
}
