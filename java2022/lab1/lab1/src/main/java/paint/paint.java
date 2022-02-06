package paint;

public class paint {
	private String title;
	private float price;
	private int cat;
	private String type;
	public paint(String title, float price, int cat, String type) {
		super();
		this.title = title;
		this.price = price;
		this.cat = cat;
		this.type = type;
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
	public int getCat() {
		return cat;
	}
	public void setCat(int cat) {
		this.cat = cat;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "{\"title\": \""+title+"\", \"type\": \""+type+"\", \"price\": "+price+", \"cat\" :"+cat+"}";
	}
	
}
