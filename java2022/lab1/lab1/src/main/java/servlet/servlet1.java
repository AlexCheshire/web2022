package servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import paint.Mock;
import paint.paint;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import crud.Lab2CrudInterface;

/**
 * Servlet implementation class Servlet1
 */
@WebServlet("/Servlet1/*")
public class Servlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private List<paint> lp = new Mock().getPaintList();
	
	ServletConfigInterface servletConfig;
	Lab2CrudInterface lab2Crud;
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet1() {
        super();
        this.servletConfig = new ServletConfig();
        this.lab2Crud = servletConfig.getCrud();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		setAccessControlHeaders(response);
		response.setContentType("application/json");
		response.getWriter().println(lp);
		//PrintWriter out = response.getWriter();
		//out.println("["+lab2Crud.readPaint()+"]");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		paint paint = Helpers.paintParse(request);
		paint.setCat(Helpers.getNextCat(lp));
		lp.add(paint);
		doGet(request, response);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
//		String title = request.getParameter("title");
//		float price = Float.parseFloat(request.getParameter("price"));
//		String type = request.getParameter("type");
//		int cat = Integer.parseInt(request.getParameter("cat"));
//		
//		lab2Crud.updatePaint(new paint(title,price,type,cat));
		
		setAccessControlHeaders(response);
		paint paint = Helpers.paintParse(request);
		int cat = Integer.parseInt(request.getPathInfo().substring(1));
		System.out.println(cat);
		response.setContentType("application/json");
		int index = Helpers.getIndexByPaintCat(cat, lp);
		lp.set(index,paint);
		doGet(request, response);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		setAccessControlHeaders(response);
		int cat = Integer.parseInt(request.getPathInfo().substring(1));
		System.out.println(cat);
		response.setContentType("application/json");
		int index = Helpers.getIndexByPaintCat(cat, lp);
		lp.remove(index);
		doGet(request, response);
	}
	
	protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		setAccessControlHeaders(response);
		response.setStatus(HttpServletResponse.SC_OK);
		
	}
	
	private void setAccessControlHeaders(HttpServletResponse resp) {
		
		resp.setHeader("Access-Control-Allow-Origin", "*");
		resp.setHeader("Access-Control-Allow-Methods", "*");
		resp.setHeader("Access-Control-Allow-Headers", "*");
	}


}

