<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>

<%@ taglib prefix="mt" tagdir="/WEB-INF/tags"%>

<script src="${pageContext.request.contextPath}/assets/admin/js/usuario-crud.js"></script>

<mt:admin_tamplate title="Projeto" breadcrumb="Cadastrar Usuario">

	<jsp:attribute name="content">
	
	<section class="content">
			
		  <section class="content-header">
			<form class="text-center border border-light p-5" action="#!">
			
			    <p class="h4 mb-4">Novo Usuario</p>
				
				<div class="form-group">
				    <!-- Nome -->
				    <input name="nome" type="text" id="nome" class="form-control mb-4" placeholder="Nome">
			    </div>
			
				<div class="form-group">
				    <!-- Telefone -->
				    <input name="email" type="number" id="telefone" class="form-control mb-4" placeholder="Telefone">
			    </div>
			    
			    <div class="form-group">
				     <!-- Email -->
				    <input name="cnpj" type="email" id="email" class="form-control mb-4" placeholder="Email">
			    </div>
			
			
			    <!-- Enviar -->
			    <button id="btn-salvaUsu" class="btn btn-primary" type="submit">Salvar</button>
			    <!-- Listar -->
			    <button id="btn-listarUsu" class="btn btn-secondary" type="button">Usuarios</button>
			
			</form>
	     </section>
     
     </section>

</jsp:attribute>

</mt:admin_tamplate>