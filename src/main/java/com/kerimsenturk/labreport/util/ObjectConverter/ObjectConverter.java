package com.kerimsenturk.labreport.util.ObjectConverter;

public class ObjectConverter<BaseObject, ConvertedObject> implements Convertable<BaseObject, ConvertedObject>{
    Convertable<BaseObject, ConvertedObject> convertable;

    public ObjectConverter(Convertable<BaseObject, ConvertedObject> convertable){
        this.convertable = convertable;
    }

    @Override
    public ConvertedObject convert(BaseObject baseObject) {
        return convertable.convert(baseObject);
    }

    @Override
    public BaseObject deConvert(ConvertedObject convertedObject) {
        return convertable.deConvert(convertedObject);
    }
}
