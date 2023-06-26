package libreria;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "libro")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Libros {
	@Id
	@Column
	private int idlibro;
	private String titulo;
	private double precio;
	private int cantEjemplares;
	private String origen;
	private int idtema;



}
