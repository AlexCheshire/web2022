package paint;

public class paint {
	private String title;
	private float price;
	private String type;
	private int cat;
	public paint(String title, float price, String type, int cat) {
		super();
		this.title = title;
		this.price = price;
		this.type = type;
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
	public int getCat() {
		return cat;
	}
	public void setCat(int cat) {
		this.cat = cat;
	}
	@Override
	public String toString() {
		return "{\"title\": \""+ title + "\", \"price\":" + price + ", \"type\":" + type + ", \"cat\":" + cat+"}";
	}
	
	
}
