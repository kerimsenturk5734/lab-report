package com.kerimsenturk.labreport.util.Result;

public class ErrorDataResult<T> extends DataResult<T> {
	
	public ErrorDataResult(T data, String message) {
		super(data, false, message);
	}

	//Bir hata varsa data dönemeyebilir.
	public ErrorDataResult( String message) {
		super(null,false, message);
	}
	
}
	