<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	String user_name = request.getParameter("user_name");
	out.print(user_name+"님 안녕하세요");
%>