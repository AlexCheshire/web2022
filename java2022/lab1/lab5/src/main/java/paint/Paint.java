package paint;

import java.io.Serializable;

public class Paint implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int cat;
	private String title;
	private float price;
	private String type;
	
	
	
	public Paint(int cat, String title, float price, String type) {
		super();
		this.cat = cat;
		this.title = title;
		this.price = price;
		this.type = type;
		
	}
	
	public Paint() {
	}
	
	public int getCat() {
		return cat;
	}
	public void setCat(int cat) {
		this.cat = cat;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	

	@Override
	public String toString() {
		return "{\"cat\": "+cat+", \"title\": \""+title+"\",\"price\": "+price+",\"type\": \""+type+"\"}";
	}
}
