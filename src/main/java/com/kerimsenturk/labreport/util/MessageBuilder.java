package com.kerimsenturk.labreport.util;

import com.kerimsenturk.labreport.config.MessageSourceConfig;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;


import java.util.Locale;

public class MessageBuilder {
    private String code;
    private Object[] params;
    private Locale locale= LocaleContextHolder.getLocale();

    //Default message source indicated in MessageSourceConfig
    private MessageSource messageSource = new MessageSourceConfig().messageSource();

    public String getCode() {
        return code;
    }

    public Object[] getParams() {
        return params;
    }

    public Locale getLocaleContext() {
        return locale;
    }
    public MessageSource getMessageSource() {
        return this.messageSource;
    }
    public MessageBuilder code(String code) {
        this.code = code;
        return this;
    }

    public MessageBuilder paramArray(Object[] params) {
        this.params = params;
        return this;
    }
    public MessageBuilder params(Object... params) {
            this.params = params;
            return this;
    }

    public MessageBuilder messageSource(MessageSource messageSource){
        this.messageSource = messageSource;
        return this;
    }

    public MessageBuilder locale(Locale locale) {
        this.locale = locale;
        return this;
    }

    public String build(){
        return messageSource.getMessage(code, params, locale);
    }
}
